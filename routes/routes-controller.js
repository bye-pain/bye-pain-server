/**
 * Created by crist on 01/04/2017.
 */
"use strict";
import * as variables from "./router-variables";

class RoutesController {

  getRoutes(app) {
    const vars = Object.keys(variables);
    vars.forEach(value => {
      app.use(variables[value].ROUTE, variables[value].VALUE);
    });
  }

}

export const routesController = new RoutesController();