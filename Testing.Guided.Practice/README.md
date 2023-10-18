// ELEVATOR SYSTEM TESTING PSEUDOCODE

// UNIT TESTS

FUNCTION TestDoorOpenButtonWhileStationary():
    1. Initialize the elevator in a stationary state on any floor.
    2. Press the "door open" button.
    3. Observe the state of the elevator door.
    4. Assert that the door remains open as long as the button is pressed.

FUNCTION TestDoorOpenButtonWhileMoving():
    1. Initialize the elevator in motion between two floors.
    2. Press the "door open" button.
    3. Observe the state of the elevator door.
    4. Assert that the door does not open while the elevator is in motion.

FUNCTION TestDoorCloseButtonWithObstruction():
    1. Open the elevator door.
    2. Place an obstruction in the doorway.
    3. Press the "door close" button.
    4. Observe the state of the elevator door.
    5. Assert that the door does not close and reopens.

FUNCTION TestFloorButtonLighting():
    1. Initialize the elevator in a stationary state on any floor.
    2. Press any unlit floor button.
    3. Observe the button's state.
    4. Assert that the button lights up upon being pressed.

// UNIT TESTS RELATED TO VIDEO SCREEN FOR DEAF ACCESSIBILITY

FUNCTION TestASLVideoScreenActivationWithEmergencyButton():
    1. Initialize the elevator in a stationary state on any floor.
    2. Press the emergency button.
    3. Observe if the video screen activates and displays emergency protocols in ASL.
    4. Assert that ASL instructions appear within a specific time frame.

FUNCTION TestASLInstructionsForStandardOperations():
    1. Select a floor using the button panel.
    2. Observe if the video screen displays the floor number and direction (up/down) in ASL.
    3. Assert that the ASL interpretation matches the floor number and direction selected.

FUNCTION TestSpeakerAndASLVideoScreenIntegrationForEmergencies():
    1. Press the emergency button inside the elevator.
    2. Observe if the video screen displays visual instructions in ASL or a live ASL interpreter feed from building security.
    3. Assert that communication is visually accessible in ASL without delay.

FUNCTION TestASLVersionOfAdsOnVideoScreen():
    1. Initialize the elevator in a stationary state on any floor.
    2. Observe the content displayed on the video screen.
    3. Assert that hotel's commercial ads have an option or are automatically interpreted in ASL.

// INTEGRATION TESTS

FUNCTION TestIntegrationOfDoorAndFloorButtons():
    1. Press a floor button higher than the current floor.
    2. Simultaneously press the "up" button in the elevator lobby.
    3. Observe the state of the elevator and its response.
    4. Assert that the elevator temporarily ignores the "up" button request from the lobby until it reaches its initial destination.

FUNCTION TestVideoScreenIntegrationWithASLInterpreter():
    1. Press the emergency button inside the elevator.
    2. Observe if the video screen displays a live ASL interpreter or communication link with an ASL interpreter from building security.
    3. Monitor the building's security station or control room to confirm that an ASL interpreter is available for communication.
    4. Assert that security personnel can facilitate communication through ASL.

// FUNCTIONAL TESTS

FUNCTION TestElevatorFullFunctionalitySequence():
    1. A user starts at their room on any given floor.
    2. They go to Floor 7.
    3. Then they travel to the Lobby for breakfast.
    4. They return to their room.
    5. They proceed to the fitness center on Floor 10.
    6. Finally, they return to their room.
    7. Assert that the elevator functions correctly through this entire sequence.

FUNCTION TestASLInstructionsDuringPowerFailure():
    1. Simulate a power failure while the elevator is stationary.
    2. Observe if the video screen continues to display emergency protocols in ASL.
    3. Assert that the video screen remains operational and continues to provide ASL instructions.

// ACCEPTANCE TESTS

FUNCTION TestPanelInstallationFeedbackCollection():
    1. Install the new elevator panel system in five different locations.
    2. Operate the elevator system normally for six months.
    3. Collect feedback from users.
    4. Assert that the feedback received is predominantly positive.

FUNCTION TestDeafCommunityFeedbackCollection():
    1. Install the new elevator panel system with video screen ASL capabilities in a few locations.
    2. Operate the elevator system normally for a specific period.
    3. Collect feedback specifically from Deaf individuals or organizations representing the Deaf community.
    4. Assert that feedback regarding ASL functionality and clarity is positive.


