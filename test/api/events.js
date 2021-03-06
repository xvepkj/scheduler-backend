import test from "../test-gen.js";
import ec from  "../../util/error-codes.js";

export default function() {
  test.events.add.pass(
    "Adds a event",
    {
      name: "study",
      date: "2022-03-22",
      startTime: "11:30",
      endTime: "22:00",
      trackingType: "UNTRACKED",
    }
  );

  test.events.add.pass(
    "Adds another event",
    {
      name: "play",
      date: "2022-03-22",
      startTime: "15:30",
      endTime: "22:00",
      trackingType: "TRACKED",
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
      name: "study-updated",
      date: "2022-03-22",
      startTime: "11:30",
      endTime: "22:00",
      trackingType: "UNTRACKED",
    }
  );
}