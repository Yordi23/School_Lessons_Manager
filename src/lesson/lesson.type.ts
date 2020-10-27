import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('Lesson')//This is the name of the type
export class LessonType {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    startDate: string;

    @Field()
    endDate: string;
}