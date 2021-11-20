class RandomList {
	constructor(items) {
		this.cur = 0
		this.max = 0
		this.items = []
		items.forEach(item => {
			this.items.push(item)
			this.max++
		})
		this.shuffleArray(this.items)
	}

	get() {
		let ret = this.items[this.cur]
		this.cur++
		if (this.cur >= this.max) {
			this.cur = 0
			this.shuffleArray(this.items)
		}
		return ret
	}

	shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[array[i], array[j]] = [array[j], array[i]]
		}
	}
}

module.exports = RandomList
