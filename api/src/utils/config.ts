export const ENV = {
  jwtSecret: String(process.env.JWT_SECRET),
};

export const uuidRegex =
  '^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$';
