import  { data} from "../app"
import { expect } from "chai"
import "mocha"


describe("Comput Engine", () => {
    it("VM name \"prduction\" ", () => {
        expect(data["VMName"], "Name is \"prduction\"").to.equal("production");
    })


    it("locarion in eastus ", () => {
        expect(data["VMLocation"], "should in \"eastus\"").to.equal("eastus");
    })



})

