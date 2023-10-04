/// <reference path="Teacher.ts" />

interface Subjects {
	export interface Teacher {
		experienceTeachingJava?: number;
	}
	class Java extends Subject {
		getRequirements(): string {
			return "Here is the list of requirements for Java";
		}
		getAvailableTeacher(): string {
			return this.teacher.experienceTeachingJava > 0 ? `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
		}
	}
}
