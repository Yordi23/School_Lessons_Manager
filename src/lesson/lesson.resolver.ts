import { Args, Mutation, Query } from "@nestjs/graphql";
import { Resolver } from "@nestjs/graphql";
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from "./lesson.input";

@Resolver(of => LessonType)//This resolver is of type "LessonType"
export class LessonResolver {
    constructor(
        private lessonService: LessonService
    ) { }

    @Query(returns => LessonType)//Here we define what type does this Query returns
    lesson(
        @Args('id') id: string
    ) {

        return this.lessonService.getLesson(id);
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
}