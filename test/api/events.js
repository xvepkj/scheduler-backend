import test from "../test-gen.js";
import ec from  "../../util/error-codes.js";

export default function() {
  test.events.add.pass(
    "Adds a event",
    {
      date: "2022-03-22",
      baseEvent: {
        startTime: "11:30",
        endTime: "22:00",
        trackingType: "UNTRACKED",
        name: "study"
      }
    }
  );

  test.events.add.pass(
    "Adds another event",
    {
      date: "2022-03-22",
      baseEvent: {
        name: "play",
        startTime: "15:30",
        endTime: "22:00",
        trackingType: "TRACKED"
      }
    }
  );

  test.events.all.pass("Get the added event", "2022-03-22");
        

  test.events.delete.pass("delete the first event", 
    {
      id : "0"
    }
  );

  test.events.update.pass(
    "Update an event",
    {
      id: "1",
      date: "2022-03-22",
      baseEvent: {
        name: "study-updated",
        startTime: "11:30",
        endTime: "22:00",
        trackingType: "UNTRACKED",
      }
    }
  );
}