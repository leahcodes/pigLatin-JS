// describe('pigLatin', function() {
//   it("returns the original word", function() {
//     expect(pigLatin("apple")).to.equal("apple");
//   });
// });

describe('pigLatin', function() {
  it("adds ay to the end of the word", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });
});

// describe('pigLatin', function() {
//   it("adds ay to the end of the word only if the word starts with a vowel", function() {
//     expect(pigLatin("banana")).to.equal("anana");
//   });
// });

// describe('pigLatin', function() {
//   it("cuts the first consecutive consonants of a word", function() {
//     expect(pigLatin("cream")).to.equal("eam");
//   });
// });

// describe('pigLatin', function() {
//   it("cuts the first consecutive consonants of a word, adds consonants to the end, and adds ay", function() {
//     expect(pigLatin("cream")).to.equal("eamcray");
//   });
// });

describe('pigLatin', function() {
  it("cuts the first consecutive consonants of a word up to 4 consonants, adds consonants to the end, and adds ay", function() {
    expect(pigLatin("banana")).to.equal("ananabay");
    expect(pigLatin("cream")).to.equal("eamcray");
    expect(pigLatin("string")).to.equal("ingstray");
    expect(pigLatin("dyson")).to.equal("ysonday");
  });
});

describe('pigLatin', function() {
  it("works for multiple words", function() {
    expect(pigLatin("banana and a banana")).to.equal("ananabay anday aay ananabay");
  });
});
