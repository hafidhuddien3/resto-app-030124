const AboutUs = {
  async render () {
    return `
      <h1>About Us</h1>
      <br />
      <h3>Profil</h3>
      <br />
      <p>
        Lorem ipsum dolor sit amet. Sit ipsum voluptate quo excepturi molestiae
        aut doloribus accusantium. Eos nostrum necessitatibus aut cumque minima
        et dolorem sunt et saepe quia qui voluptate quisquam non laborum dolorum
        et aperiam odio. Et quia ipsum in rerum molestiae ut fugiat alias ut
        quia dicta ut omnis rerum qui galisum galisum eos consequatur quos! Aut
        facilis exercitationem non nihil placeat et laborum magnam vel itaque
        molestiae quo velit velit et consectetur quod.
      </p>
      <br />
      <p>
        Est dolorum officiis qui nihil architecto ad obcaecati dolorum in quia
        aperiam ex facere quos non ipsam aspernatur est quia libero. Eos quis
        doloribus ut error maiores est nemo quia vel aliquid accusamus sed quos
        consectetur ut velit enim. Non assumenda consequuntur quo totam velit
        aut neque dolorem 33 culpa quibusdam cum alias ullam.
      </p>
      <br />
      <p>
        Et dolores repellat sed adipisci excepturi aut consequatur odit. Est
        quia vitae ex rerum soluta eos debitis omnis non officia molestias quo
        optio praesentium.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet. Sit ipsum voluptate quo excepturi molestiae
        aut doloribus accusantium. Eos nostrum necessitatibus aut cumque minima
        et dolorem sunt et saepe quia qui voluptate quisquam non laborum dolorum
        et aperiam odio. Et quia ipsum in rerum molestiae ut fugiat alias ut
        quia dicta ut omnis rerum qui galisum galisum eos consequatur quos! Aut
        facilis exercitationem non nihil placeat et laborum magnam vel itaque
        molestiae quo velit velit et consectetur quod.
      </p>
      <br />
      <p>
        Est dolorum officiis qui nihil architecto ad obcaecati dolorum in quia
        aperiam ex facere quos non ipsam aspernatur est quia libero. Eos quis
        doloribus ut error maiores est nemo quia vel aliquid accusamus sed quos
        consectetur ut velit enim. Non assumenda consequuntur quo totam velit
        aut neque dolorem 33 culpa quibusdam cum alias ullam.
      </p>
      <br />
      <a href="https://github.com/hafidhuddien3">Github Account</a>
    `
  },

  async afterRender () {
    await this._initialData()
    this._initialListener()
  },

  _initialListener () {},

  async _initialData () {}
}

export default AboutUs
