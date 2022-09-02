import { ValidatorConstraintInterface } from "class-validator";
export declare class IsAddress implements ValidatorConstraintInterface {
    validate(value: string): boolean;
    defaultMessage(): string;
}
