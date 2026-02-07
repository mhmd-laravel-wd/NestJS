import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log('Dotenv loaded HOST:', process.env.HOST);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000;
  const host = process.env.HOST || 'localhost';

  await app.listen(port, host);

  console.log(`Server is listening on http://${host}:${port}`);
}

void bootstrap();
