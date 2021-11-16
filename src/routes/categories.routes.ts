import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
    const createCategoryService = new CreateCategoryService(
        categoriesRepository
    );

    createCategoryService.execute(req.body);

    return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
    const getAll = categoriesRepository.list();

    return res.json(getAll);
});

export { categoriesRoutes };
