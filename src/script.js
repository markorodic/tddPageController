function Pager(totalNumberOfItems, itemsPerPage, offSet) {
	this.totalNumberOfItems = totalNumberOfItems;
	this.itemsPerPage = itemsPerPage;
	this.offSet = offSet;
}

Pager.prototype = {
	numberOfPages: function() {
		return this.totalNumberOfItems/this.itemsPerPage;
	},

	currentPage: function() {
		return Math.ceil(this.offSet/this.itemsPerPage);
	},

	visiblePageNumberLinks: function() {	
		var currentPage = this.currentPage()
		var previousPage = currentPage - 1;
		var nextPage = currentPage + 1;
		
		if (this._onlyOnePage()) {
			return currentPage
		} else if (this._onFirstPage()) {
			return currentPage + ', ' + nextPage
		} else if (this._onLastPage()) {
			return previousPage+ ', ' + currentPage
		}

		return previousPage + ', ' + currentPage + ', ' + nextPage;
	},

	visiblePageTurnLinks: function() {
		if (this._onlyOnePage()) {
			return ""
		} else if (this._onFirstPage()) {
			return "next"
		} else if (this._onLastPage()) {
			return "prev"
		}

		return "prev" + ', ' + "next";
	},

	_onFirstPage: function() {
		return this.currentPage() == 1;
	},

	_onlyOnePage: function() {
		return this.numberOfPages() == 1;
	},
	_onLastPage: function() {
		return this.currentPage() == this.numberOfPages();
	}
};