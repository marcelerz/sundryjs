/**
 * Generic implementation of an event emitter.
 *
 * @format
 */

/**
 * Just a type to make TypeScript happy
 *
 * EventMap is important here to merge the K (event in the subscribers
 * declaraion) and the E (event in the calls below).
 * The any makes it possible to get different values for different K and E.
 */
type EventMap = Record<string, any>;

/**
 * Type returned to unsubscribe events
 */
export interface EventSubscription {
	remove: () => void;
}

class EventEmitter<T> {
	/**
	 * Lists subscribers for this event emitter.
	 */
	private subscribers: {
		[K in keyof EventMap]?: Array<(payload: EventMap[K]) => void>;
	} = {};

	/**
	 * Lists subscribers for all events.
	 */
	private allSubscribers: Array<(event: string & keyof T) => void> = [];

	/**
	 * Starts listen to a specific event, using the callback when the event
	 * is triggered.
	 */
	listen<E extends string & keyof T>(
		event: E,
		cb: (data: T[E]) => void,
	): EventSubscription {
		this.subscribers[event] = (this.subscribers[event] || []).concat(cb);
		return {
			remove: (): void => {
				this.subscribers[event] = (this.subscribers[event] || []).filter(
					(fn) => fn !== cb,
				);
			},
		};
	}

	/**
	 * Starts listening to all events, using the callback when the event is
	 * triggered.
	 *
	 * Note:
	 * This does not listen to the patload, but only the event name. Use this
	 * only for information only. Also use sparingly as it can become quickly
	 * expensive to listen to all events.
	 */
	listenToAll<E extends string & keyof T>(
		cb: (event: E) => void,
	): EventSubscription {
		// @ts-ignore Explicit: It is assignable.
		this.allSubscribers.push(cb);
		return {
			remove: (): void => {
				this.allSubscribers = this.allSubscribers.filter((fn) => fn !== cb);
			},
		};
	}

	/**
	 * Triggers an event with the expected data.
	 */
	trigger<E extends string & keyof T>(event: E, payload: T[E]): void {
		(this.subscribers[event] || []).forEach((subscriber) => {
			subscriber(payload);
		});
		this.allSubscribers.forEach((subscriber) => {
			subscriber(event);
		});
	}

	/**
	 * Convenience function to remove a subscription.
	 */
	remove(subscription: EventSubscription): void {
		subscription.remove();
	}

	/**
	 * Removes all subscribers from the event emitter.
	 */
	removeAll(): void {
		this.subscribers = {};
		this.allSubscribers = [];
	}
}

export default EventEmitter;
