import  { data} from "../app"
import { expect } from "chai"
import "mocha"


describe("Function App", () => {
    it("Function App name \"webfunctiopn\" ", () => {
        expect(data["functionAppName"], "Name is \"webfunctiopn\"").to.equal("webfunctiopn");
    })


    it("OS using linux ", () => {
        expect(data["functionAppOS"], "should use linux").to.equal("linux");
    })

    it("LinuxFxVersion Node 14", () => {
        expect(data["functionAppLinuxFxVersion"], "should use Node 14").to.equal("Node|14");
    })



})

