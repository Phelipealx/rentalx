import { Response, Request } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    constructor(
        private createSpecificationUseCase: CreateSpecificationUseCase
    ) {}

    handle(request: Request, response: Response): Response {
        this.createSpecificationUseCase.execute(request.body);
        return response.status(201).send();
    }
}

export { CreateSpecificationController };
