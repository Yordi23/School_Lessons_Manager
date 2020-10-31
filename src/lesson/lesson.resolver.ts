import { Args, Mutation, Parent, Query, ResolveField } from "@nestjs/graphql";
import { Resolver } from "@nestjs/graphql";
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from "./lesson.input";
import { AssignStudentsToLessonInput } from "./assign-students-to-lesson.input";
import { Lesson } from './lesson.entity';
import { StudentService } from '../student/student.service';

@Resolver(of => LessonType)//This resolver is of type "LessonType"
export class LessonResolver {
    constructor(
        private lessonService: LessonService,
        private studentService: StudentService
    ) { }

    @Query(returns => LessonType)//Here we define what type does this Query returns
    lesson(
        @Args('id') id: string
    ) {

        return this.lessonService.getLesson(id);
    }

    @Query(returns => [LessonType])
    lessons() {
        return this.lessonService.getLessons();
    }

    @Mutation(returns => LessonType)
    createLesson(
        //Without DTO (input)
        // @Args('name') name: string,
        // @Args('startDate') startDate: string,
        // @Args('endDate') endDate: string,

        @Args('createLessonInput') createLessonInput: CreateLessonInput
    ) {
        return this.lessonService.createLesson(createLessonInput)
    }

    @Mutation(returns => LessonType)
    assignStudentsToLesson(
        @Args('assignStudentsToLessonInput') assignStudentsToLessonInput: AssignStudentsToLessonInput
    ) {
        const { lessonId, studentIds } = assignStudentsToLessonInput;

        return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
    }

    @ResolveField()
    async students(@Parent() lesson: Lesson) {
        return this.studentService.getManyStudents(lesson.students)
    }

}