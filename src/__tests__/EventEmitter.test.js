/**
 * Tests for the EventEmitter module.
 *
 * @format
 */

// SUT
import EventEmitter from "../EventEmitter";

describe("eventEmitter", () => {
	describe("single event", () => {
		it("listens to events", () => {
			// Setup
			let calledValue = null;

			// Prepare
			const eventEmitter = new EventEmitter();
			eventEmitter.listen("test", (value) => {
				calledValue = value;
			});

			// Verify
			eventEmitter.trigger("test", 42);

			// Assert
			expect(calledValue).toStrictEqual(42);
		});

		it("does not listen to other events", () => {
			// Setup
			let calledValue = null;

			// Prepare
			const eventEmitter = new EventEmitter();
			eventEmitter.listen("test", (value) => {
				calledValue = value;
			});

			// Verify
			eventEmitter.trigger("foo", 42);

			// Assert
			expect(calledValue).toBeNull();
		});

		it("can trigger unknown events", () => {
			const eventEmitter = new EventEmitter();

			// Verify
			expect(() => {
				eventEmitter.trigger("foo", 42);
			}).not.toThrow();
		});

		it("unsuscribes through subscription", () => {
			// Setup
			let calledValue = null;

			// Prepare
			const eventEmitter = new EventEmitter();
			const subscription = eventEmitter.listen("test", (value) => {
				calledValue = value;
			});
			subscription.remove();

			// Verify
			eventEmitter.trigger("test", 42);

			// Assert
			expect(calledValue).toBeNull();
		});

		it("unsuscribes through remove call", () => {
			// Setup
			let calledValue = null;

			// Prepare
			const eventEmitter = new EventEmitter();
			const subscription = eventEmitter.listen("test", (value) => {
				calledValue = value;
			});
			eventEmitter.remove(subscription);

			// Verify
			eventEmitter.trigger("test", 42);

			// Assert
			expect(calledValue).toBeNull();
		});

		it("unsuscribes through removeAll call", () => {
			// Setup
			let calledValue = null;

			// Prepare
			const eventEmitter = new EventEmitter();
			eventEmitter.listen("test", (value) => {
				calledValue = value;
			});
			eventEmitter.removeAll();

			// Verify
			eventEmitter.trigger("test", 42);

			// Assert
			expect(calledValue).toBeNull();
		});
	});

	describe("multiple events", () => {
		it("listens to events", () => {
			// Setup
			let calledValue = null;

			// Prepare
			const eventEmitter = new EventEmitter();
			eventEmitter.listenToAll((event) => {
				calledValue = event;
			});

			// Verify
			eventEmitter.trigger("test", 42);

			// Assert
			expect(calledValue).toStrictEqual("test");
		});

		it("unsuscribes through subscription", () => {
			// Setup
			let calledValue = null;

			// Prepare
			const eventEmitter = new EventEmitter();
			const subscription = eventEmitter.listenToAll((event) => {
				calledValue = event;
			});
			subscription.remove();

			// Verify
			eventEmitter.trigger("test", 42);

			// Assert
			expect(calledValue).toBeNull();
		});

		it("unsuscribes through remove call", () => {
			// Setup
			let calledValue = null;

			// Prepare
			const eventEmitter = new EventEmitter();
			const subscription = eventEmitter.listenToAll((event) => {
				calledValue = event;
			});
			eventEmitter.remove(subscription);

			// Verify
			eventEmitter.trigger("test", 42);

			// Assert
			expect(calledValue).toBeNull();
		});

		it("unsuscribes through removeAll call", () => {
			// Setup
			let calledValue = null;

			// Prepare
			const eventEmitter = new EventEmitter();
			eventEmitter.listenToAll((event) => {
				calledValue = event;
			});
			eventEmitter.removeAll();

			// Verify
			eventEmitter.trigger("test", 42);

			// Assert
			expect(calledValue).toBeNull();
		});
	});
});
