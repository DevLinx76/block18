// Learning Objectives:
// Compare the benefits and drawbacks of automated testing and test driven development to manual testing/QA.
// Explain the differences between unit, acceptance, functional, integration tests.
// Describe the use and purpose of mocking and stubbing in automated tests.

// Testing Guided Practice:
// Use a text editor to complete the following:

// You were hired by a global hotel chain to redesign the functionality of the button panel on their elevators. The goal is to replace the outdated panel in over 1,200 different locations. Before you begin coding, you should make a list of all the ways these panels should be tested to make sure they are working correctly and respond to unexpected input in a way that makes sense. Remember to consider happy and unhappy paths! 

// To complete this guided practice, write as many Unit Tests as possible. If time allows, write at least one integration, functional, and acceptance test. Be sure to label each test with its associated type (Unit, Integration, Functional, Acceptance).  

// Note: the answers provided below are just some of the many tests that you could have written!

// =============================================================================================================================



/*

Guided Practice Test [Elevator button panel]

Unit Test:
- Test that pressing a floor button activates the corresponding floor indicator light.
- Test that pressing the "door open" button holds the door open as long as it is pushed.
- Test that pressing the "door open" button when the elevator is moving has no effect.
- Test that pressing the "door closed" button closes the door if it is open.
- Test that pressing the "door closed" button when the door is open and someone is standing in the doorway has no effect.
- Test that the floor buttons are disabled when the elevator is out of service.
- Test that the emergency stop button immediately stops the elevator and opens the door.
- Test that the emergency phone button connects to the appropriate emergency services.

Integration Test Examples:
- Test that when the elevator arrives at a floor, the corresponding floor indicator light turns off.
- Test that pressing the "up" button on a floor activates the corresponding indicator light and the elevator stops at that floor if it is moving in the same direction.
- Test that pressing the "down" button on a floor activates the corresponding indicator light and the elevator stops at that floor if it is moving in the same direction.

Functional Test Examples:
- Test the complete operation of the elevator based on different user scenarios, such as going from a guest's room to the lobby, then to a specific floor, and finally returning to the room.
- Test that the elevator can handle simultaneous button presses from multiple floors and prioritize the requests based on the current direction of the elevator.
- Test the response time of the elevator to button presses and ensure it meets the specified performance requirements.

Acceptance Test Examples:
- Install the new button panel in a few locations and simulate various real-life scenarios to evaluate its usability, reliability, and overall user satisfaction.
- Test the compatibility of the button panel with the existing elevator control system and ensure seamless integration.

These test examples cover various aspects of the elevator button panel, including individual button functionality, interaction between buttons and elevator operations, overall system behavior, and user experience. They aim to ensure the button panel works correctly, responds appropriately to different inputs, and meets the desired specifications and user expectations.
*/




// [Elevator Test]

// Unit Test: Pressing a floor button activates the corresponding floor indicator light.
test("Pressing a floor button activates the corresponding floor indicator light", () => {
    // Arrange: Set up the elevator with a floor button and indicator light.
    const elevator = new Elevator();
    const floorButton = new FloorButton(5);
    const indicatorLight = new IndicatorLight();
  
    // Act: Press the floor button.
    floorButton.press();
  
    // Assert: Check if the corresponding floor indicator light is activated.
    expect(indicatorLight.isActivated()).toBe(true);
  });
  
  // Unit Test: Pressing the "door open" button holds the door open as long as it is pushed.
  test("Pressing the 'door open' button holds the door open as long as it is pushed", () => {
    // Arrange: Set up the elevator with a 'door open' button and door object.
    const elevator = new Elevator();
    const doorButton = new DoorButton("open");
    const door = new Door();
  
    // Act: Press and hold the 'door open' button.
    doorButton.pressAndHold();
  
    // Assert: Check if the door remains open.
    expect(door.isOpen()).toBe(true);
  });
  
  // Integration Test: Going from a higher to a lower floor temporarily disables the elevator from responding to the 'up' button pressed in the lobby.
  test("Going from a higher to a lower floor temporarily disables the elevator from responding to the 'up' button pressed in the lobby", () => {
    // Arrange: Set up the elevator with an 'up' button and a trip from a higher to a lower floor.
    const elevator = new Elevator();
    const upButton = new UpButton();
    const higherFloor = 8;
    const lowerFloor = 5;
  
    // Act: Simulate a trip from a higher floor to a lower floor.
    elevator.goToFloor(higherFloor);
    elevator.goToFloor(lowerFloor);
  
    // Assert: Check if the 'up' button in the lobby is disabled.
    expect(upButton.isEnabled()).toBe(false);
  });
  
  // Functional Test: Operate the elevator based on user scenarios.
  test("Operate the elevator based on user scenarios", () => {
    // Arrange: Set up the elevator and simulate user scenarios.
    const elevator = new Elevator();
    const guest = new Guest();
  
    // Act: Simulate guest's journey: room -> floor 7 (breakfast) -> room -> floor 10 (fitness center) -> room.
    guest.pressFloorButton(elevator, 7);
    elevator.goToFloor(7);
    guest.pressFloorButton(elevator, "lobby");
    guest.pressFloorButton(elevator, 10);
    elevator.goToFloor(10);
    guest.pressFloorButton(elevator, "lobby");
  
    // Assert: Check if the elevator reaches the desired floors and returns to the guest's room.
    expect(elevator.getCurrentFloor()).toBe(guest.getRoomFloor());
  });
  
  // Acceptance Test: Install the new panel in multiple locations and collect feedback.
  test("Install the new panel in multiple locations and collect feedback", () => {
    // Arrange: Set up the elevator panel in multiple locations.
    const locations = ["Location A", "Location B", "Location C", "Location D", "Location E"];
    const elevatorPanel = new ElevatorPanel();
  
    // Act: Install the panel in each location and collect feedback.
    locations.forEach((location) => {
      elevatorPanel.install(location);
      elevatorPanel.collectFeedback(location);
    });
  
    // Assert: Check if feedback is collected for all locations.
    expect(elevatorPanel.isFeedbackCollectedForAllLocations()).toBe(true);
});

  // Acceptance Test: Install the new panel in multiple locations and collect feedback.
test("Install the new panel in multiple locations and collect feedback", () => {
    // Arrange: Set up the elevator panel in multiple locations.
    const locations = ["Location A", "Location B", "Location C", "Location D", "Location E"];
    const elevatorPanel = new ElevatorPanel();
  
    // Act: Install the panel in each location and collect feedback.
    locations.forEach((location) => {
      elevatorPanel.install(location);
      elevatorPanel.collectFeedback(location);
    });
  
    // Assert: Check if feedback is collected for all locations.
    expect(elevatorPanel.isFeedbackCollectedForAllLocations()).toBe(true);
  });
  
  