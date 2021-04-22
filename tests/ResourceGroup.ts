import  { data} from "../app"
import { expect } from "chai"
import "mocha"


describe("Resource Group", () => {
    it("ResourceGroup name \"prduction\" ", () => {
        expect(data["rsGroupName"], "Name is \"networking\"").to.equal("networking");
    })

})

