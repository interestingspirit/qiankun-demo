class Shared {
  getName() {
    return localStorage.getItem('name') || ''
  }
  setName(name) {
    localStorage.setItem('name', name)
  }
}

class SharedModule {
  static shared = new Shared()

  static overloadShared(shared) {
    SharedModule.shared = shared
  }

  static getShared() {
    return SharedModule.shared
  }

}

export default SharedModule