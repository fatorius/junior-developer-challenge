import validateEmail from "../validateEmail";

test("Validação de email 1", () => {
	const result = validateEmail("teste@email.com");
	expect(result).toBe(true);
});

test("Validação de email 2", () => {
	const result = validateEmail("teste123@email123.com.br");
	expect(result).toBe(true);
});

test("Validação de email 3", () => {
	const result = validateEmail("teste123@email123. com. br");
	expect(result).toBe(false);
});

test("Validação de email 4", () => {
	const result = validateEmail("teste@email");
	expect(result).toBe(false);
});

test("Validação de email 5", () => {
	const result = validateEmail("abcdef");
	expect(result).toBe(false);
});

test("Validação de email 6", () => {
    const result = validateEmail("teste@email.123");
	expect(result).toBe(true);
});

test("Validação de email 7", () => {
	const result = validateEmail("teste@email.com.br.uk.pt.sg");
	expect(result).toBe(true);
});

test("Validação de email 8", () => {
	const result = validateEmail("");
	expect(result).toBe(false);
});