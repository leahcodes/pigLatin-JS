describe('pigLatin', function() {
  it("returns the original word", function() {
    expect(pigLatin("apple")).to.equal("apple");
  });
});

describe('pigLatin', function() {
  it("adds ay to the end of the word", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  })
})
