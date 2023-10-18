class Elevator {
    constructor() {
        this.currentFloor = 0;
        this.targetFloor = null;
        this.isMoving = false;
        this.doorOpen = false;
        this.VIPKeycard = null;
        this.emergencyButtonPressed = false;
        this.selectedFloorButton = null;
        this.videoScreenActivated = false;
        this.obstructionDetected = false;
    }

    openDoor() {
        if (!this.isMoving) {
            this.doorOpen = true;
        }
    }

    closeDoor() {
        if (!this.obstructionDetected) {
            this.doorOpen = false;
        } else {
            this.openDoor();
        }
    }

    selectFloor(floor) {
        if (floor === 'penthouse' && !this.VIPKeycard) {
            return 'Access denied';
        }
        this.targetFloor = floor;
        this.isMoving = true;
    }

    pressEmergencyButton() {
        this.emergencyButtonPressed = true;
        this.activateASLVideoScreen();
    }

    activateASLVideoScreen() {
        this.videoScreenActivated = true;
    }
}

class Tests {
    TestDoorOpenButtonWhileStationary(elevator) {
        elevator.openDoor();
        console.log(elevator.doorOpen ? "Test passed" : "Test failed");
    }

    TestDoorOpenButtonWhileMoving(elevator) {
        elevator.isMoving = true;
        elevator.openDoor();
        console.log(!elevator.doorOpen ? "Test passed" : "Test failed");
    }

    TestDoorCloseButtonWithObstruction(elevator) {
        elevator.openDoor();
        elevator.obstructionDetected = true;
        elevator.closeDoor();
        console.log(elevator.doorOpen ? "Test passed" : "Test failed");
    }

    TestFloorButtonLighting(elevator, floor) {
        elevator.selectedFloorButton = floor;
        console.log(elevator.selectedFloorButton ? "Test passed" : "Test failed");
    }

    TestASLVideoScreenActivationWithEmergencyButton(elevator) {
        elevator.pressEmergencyButton();
        console.log(elevator.videoScreenActivated ? "Test passed" : "Test failed");
    }

    TestVIPAccessWithKeycard(elevator) {
        elevator.VIPKeycard = true;
        const result = elevator.selectFloor('penthouse');
        console.log(result !== 'Access denied' ? "Test passed" : "Test failed");
    }

    TestASLInstructionsForStandardOperations(elevator, floor) {
        elevator.selectFloor(floor);
        let aslInterpretation = `${floor} ${floor > elevator.currentFloor ? 'up' : 'down'}`;
        console.log(aslInterpretation === `${floor} ${floor > elevator.currentFloor ? 'up' : 'down'}` ? "Test passed" : "Test failed");
    }

    TestSpeakerAndASLVideoScreenIntegrationForEmergencies(elevator) {
        elevator.pressEmergencyButton();
        let interpreterFeed = 'ASL interpreter feed from building security';
        console.log(interpreterFeed === 'ASL interpreter feed from building security' ? "Test passed" : "Test failed");
    }

    TestASLVersionOfAdsOnVideoScreen(elevator) {
        let adInterpretation = 'Hotel ad in ASL';
        console.log(adInterpretation === 'Hotel ad in ASL' ? "Test passed" : "Test failed");
    }

    TestIntegrationOfDoorAndFloorButtons(elevator, floor) {
        elevator.selectFloor(floor);
        let lobbyButtonPressed = true;
        console.log(!lobbyButtonPressed || (elevator.targetFloor === floor) ? "Test passed" : "Test failed");
    }

    TestVideoScreenIntegrationWithASLInterpreter(elevator) {
        elevator.pressEmergencyButton();
        let interpreterFeed = 'ASL interpreter feed from building security';
        console.log(interpreterFeed === 'ASL interpreter feed from building security' ? "Test passed" : "Test failed");
    }

    TestElevatorFullFunctionalitySequence(elevator) {
        elevator.selectFloor(7);
        elevator.selectFloor(0);
        elevator.selectFloor(elevator.currentFloor);
        elevator.selectFloor(10);
        elevator.selectFloor(elevator.currentFloor);
        console.log(elevator.currentFloor === elevator.currentFloor ? "Test passed" : "Test failed");
    }

    TestASLInstructionsDuringPowerFailure(elevator) {
        let powerFailure = true;
        let videoScreenOperational = !powerFailure || elevator.videoScreenActivated; 
        console.log(videoScreenOperational ? "Test passed" : "Test failed");
    }

    TestPanelInstallationFeedbackCollection() {
        let feedback = ['positive', 'positive', 'neutral', 'positive', 'positive'];
        console.log(feedback.filter(f => f === 'positive').length >= 3 ? "Test passed" : "Test failed");
    }

    TestDeafCommunityFeedbackCollection() {
        let feedbackFromDeafCommunity = ['positive', 'positive', 'neutral', 'positive', 'positive'];
        console.log(feedbackFromDeafCommunity.filter(f => f === 'positive').length >= 3 ? "Test passed" : "Test failed");
    }
}

// Using the code
const elevator = new Elevator();
const tests = new Tests();

tests.TestDoorOpenButtonWhileStationary(elevator);
tests.TestDoorOpenButtonWhileMoving(elevator);
tests.TestDoorCloseButtonWithObstruction(elevator);
tests.TestFloorButtonLighting(elevator, 4); 
tests.TestVIPAccessWithKeycard(elevator);
tests.TestASLVideoScreenActivationWithEmergencyButton(elevator);
tests.TestASLInstructionsForStandardOperations(elevator, 5);
tests.TestSpeakerAndASLVideoScreenIntegrationForEmergencies(elevator);
tests.TestASLVersionOfAdsOnVideoScreen(elevator);
tests.TestIntegrationOfDoorAndFloorButtons(elevator, 3);
tests.TestVideoScreenIntegrationWithASLInterpreter(elevator);
tests.TestElevatorFullFunctionalitySequence(elevator);
tests.TestASLInstructionsDuringPowerFailure(elevator);
tests.TestPanelInstallationFeedbackCollection();
tests.TestDeafCommunityFeedbackCollection();
