import { Specification } from "../model/Specification";
import {
    ICreateSpecificatioDTO,
    ISpecificationsRepository,
} from "./implementations/ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificatioDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        return this.specifications.find(
            (value: Specification) => name === value.name
        );
    }
}

export { SpecificationsRepository };
