import { config } from "dotenv"

 config()

export const env = {
//llandndo al .env, es la copia con el nombre del puerto.
    PORT: process.env.PORT
}