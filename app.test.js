import supertest from "supertest";
import app from "./app";

describe("Post/User", () => {
    describe("Usuario y clave correcta", () => {
        //deberia ser un objeto json
        test("debería recibir un JSON en content-type", async () => {
            const response = await supertest(app).post('/users').send({
                username: "username",
                password: "password"
            });
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
        });

        
        //deberia guardar en BD
        //deberia responder status200
        //debe tener json en el texto
    });

    describe("Usuario y clave incorrectos", ()=> {
        //deberia responder status 500
    });

    describe("Usuario y clave correctos", ()=> {
        Test("deberia ser contet-type igual a 500,", async() => {
            const response = (await supertest(app).post("/users")).send({
                username : "username",
                Pasword : "pasword",
            })

            expert(response.headers["content-type"]).toEqual(expert. stringContainig("User"));
        });
    });
    

});

