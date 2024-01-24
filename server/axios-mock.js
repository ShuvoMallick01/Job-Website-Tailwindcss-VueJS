import axios from "axios";
import axiosMock from "axios-mock-adapter";

const mock = new axiosMock(axios);

export default mock;
