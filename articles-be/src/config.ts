type ConfigProps = {
  port: number;
};

export const config = (): ConfigProps => ({
  port: Number(process.env.NESTJS_APP_DOCKER_PORT) || 8080,
});
