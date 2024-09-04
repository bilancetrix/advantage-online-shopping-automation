class homeElements {

    get logoHomepage() {
        return '.logo > a';
    }

    get btnSearch() {
        return '#search > a';
    }

    get textFieldSearch() {
        return '#autoComplete';
    }

}

module.exports = new homeElements();
