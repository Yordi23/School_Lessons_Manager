import { Query } from "@nestjs/graphql";
import { Resolver } from "@nestjs/graphql";
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)//This resolver is of type "LessonType"
export class LessonResolver {
    @Query(returns => LessonType)//Here we define what type does this Query returns
    lesson() {
        return {
            id: 'test',
            name: 'new lesson',
            startDate: (new Date()).toISOString(),
            endDate: (new Date()).toISOString(),
        }
    }
}