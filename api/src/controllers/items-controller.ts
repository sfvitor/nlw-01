import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex('items').select('*');

        const serializedItems = items.map(item => {
            const { id, title, image } = item;
            return {
                id,
                title,
                image_url: `http://192.168.43.155:3333/uploads/${image}`,
            };
        });

        return res.json(serializedItems);
    }
}

export default ItemsController;
