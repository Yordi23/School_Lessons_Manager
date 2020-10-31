import { Field, ID, ObjectType } from "@nestjs/graphql";
import { StudentType } from '../student/student.type';

@ObjectType('Lesson')//This is the name of the GraphQL type
export class LessonType {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    startDate: string;

    @Field()
    endDate: string;

    @Field(type => [StudentType])
    students: string[];
}