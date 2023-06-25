class Apps {
  constructor(
    // App parameters:
    name,
    type,
    needUpdate
  ) {
    // Define Properties:
    this.name = name;
    this.type = type;
    this.needUpdate = needUpdate;
  }
  // Add methods like normal functions
  appNeedUpdate(updateStatus) {
    this.needUpdate = updateStatus.toUpperCase();
    console.log(this.name + " needs updating? " + this.needUpdate);
  }
}

export default Apps;
