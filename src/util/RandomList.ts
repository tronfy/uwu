export default class RandomList<T> {
  cur: number
  max: number
  items: T[]

  constructor(items: T[]) {
    this.cur = 0
    this.max = 0
    this.items = []
    items.forEach(item => {
      this.items.push(item)
      this.max++
    })
    this.shuffle()
  }

  get() {
    let ret = this.items[this.cur]
    this.cur++
    if (this.cur >= this.max) {
      this.cur = 0
      this.shuffle()
    }
    return ret
  }

  shuffle() {
    for (let i = this.items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this.items[i], this.items[j]] = [this.items[j], this.items[i]]
    }
  }
}
