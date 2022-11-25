import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      movie: Model,
    },

    seeds(server) {
      server.create("movie", { name: "Inception", year: 2010 } as object);
      server.create("movie", { name: "Interstellar", year: 2014 } as object);
    },

    routes() {
      this.namespace = "api";

      this.get("/movies", (schema) => {
        return ((schema as any).movies as any).all();
      });
    },
  });
  return server;
}
