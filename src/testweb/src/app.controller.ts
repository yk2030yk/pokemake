import { Controller, Get } from '@nestjs/common'
import { screenshot } from './lib/screenshot'

@Controller("/*")
export class AppController {
  @Get()
  get(): string {
    console.log("hello world")
    screenshot("https://stackoverflow.com/questions/31780616/how-change-require-to-import-with-key-in-es6")
    return "ok"
  }
}
