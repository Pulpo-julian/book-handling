import Autor from "../models/Autor";
import { Author } from "../types/Author";

export class AutorRepository {

    static async autorPorId(id:number) {
        return await Autor.findByPk(id);
    }

}