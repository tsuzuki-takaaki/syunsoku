import { createElement } from "./SyunsokuElement";

describe("createElement", () => {
  describe("when props and children arguments are not given", () => {
    const expectedObject = {
      type: "div",
      props: { children: [] }
    }

    it("returns expected object", () => {
      expect(createElement("div")).toStrictEqual(expectedObject)
    })
  })
  describe("when child is text", () => {
    const expectedObject = {
      type: "div",
      props: {
        children: [
          {
            type: "TEXT_ELEMENT",
            props: {
              nodeValue: "hoge",
              children: []
            }
          }
        ]
      }
    }

    it("returns expected object", () => {
      expect(createElement("div", null, "hoge")).toStrictEqual(expectedObject)
    })
  })
  describe("when child is object", () => {
    const a = createElement("a", null, "hoge")
    const expectedObject = {
      type: "div",
      props: {
        children: [
          {
            type: "a",
            props: {
              children: [
                {
                  type: "TEXT_ELEMENT",
                  props: {
                    nodeValue: "hoge",
                    children: []
                  }
                }
              ]
            }
          }
        ]
      }
    }

    it("returns expected object", () => {
      expect(createElement("div", null, a)).toStrictEqual(expectedObject)
    })
  })
})
