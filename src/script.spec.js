describe('Pager', () => {
  var pager;

  it('When the book has only one page', () => {
    givenPagerWithOnePage();

		expectToEql(pager.numberOfPages(), 1)
		expectToEql(pager.currentPage(), 1)
    expectToEql(pager.visiblePageNumberLinks(), "1")
    expectToEql(pager.visiblePageTurnLinks(), "")
  })

  it('When the book has many pages and the offSet is on page one', () => {
    givenPagerOnFirstPage();

    expectToEql(pager.numberOfPages(), 20)
    expectToEql(pager.currentPage(), 1)
    expectToEql(pager.visiblePageNumberLinks(), "1, 2")
    expectToEql(pager.visiblePageTurnLinks(), "next")
  })

  it('When the book has many pages and the offSet is near the middle', () => {
    givenPagerOnMiddlePage()

    expectToEql(pager.numberOfPages(), 20)
    expectToEql(pager.currentPage(), 11)
    expectToEql(pager.visiblePageNumberLinks(), "10, 11, 12")
    expectToEql(pager.visiblePageTurnLinks(), "prev, next")
  })

  it('When the book has many pages and the offSet is on the last page', () => {
    givenPagerOnLastPage()

    expectToEql(pager.numberOfPages(), 20)
    expectToEql(pager.currentPage(), 20)
    expectToEql(pager.visiblePageNumberLinks(), "19, 20")
    expectToEql(pager.visiblePageTurnLinks(), "prev")
  })

  function givenPagerWithOnePage() {
    pager = new Pager(100, 100, 50);
  }

  function givenPagerOnFirstPage() {
    pager = new Pager(2000, 100, 70);
  }  

  function givenPagerOnMiddlePage() {
    pager = new Pager(2000, 100, 1024);
  }

  function givenPagerOnLastPage() {
    pager = new Pager(2000, 100, 2000);
  }
})
