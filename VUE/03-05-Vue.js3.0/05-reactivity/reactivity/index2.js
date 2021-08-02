const isObject = (val) => val !== null && typeof val === "object";

export function reactive(target) {
	if (!isObject(target)) return target;

	const handler = {
		get(target, key, receiver) {},
		set(target, key, value, receiver) {},
		deletePropterty(target, key) {},
	};
  return new Proxy(target,handler)
}
