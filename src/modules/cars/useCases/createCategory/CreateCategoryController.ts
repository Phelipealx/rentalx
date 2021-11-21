import { Response, Request } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}
    handle(request: Request, response: Response): Response {
        this.createCategoryUseCase.execute(request.body);

        return response.status(201).send();
    }
}

export { CreateCategoryController };
