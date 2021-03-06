// Danger ignores Danger's imports at runtime and actually would give a build
// failure if we tried to use them here and then import this file. What authors
// should do, instead, is simply assume it's there.
//
// See https://danger.systems/js/usage/extending-danger.html#writing-your-plugin
//
// In order to write tests for these files, though, we need to define
// interfaces for the Danger functionalities we'll use. These don't affect
// runtime and do provide better dev-time typing experience.
//
// A richer example of this can be found here:
// https://github.com/orta/danger-plugin-yarn/blob/5e906e57331b952afced3f6e773ed6c68d5898c0/src/index.ts#L1-L8
import { DangerDSLType } from "../../node_modules/danger/distribution/dsl/DangerDSL"
declare var danger: DangerDSLType
export declare function message(message: string): void

export async function dumpContext() {
  message(`${danger}`)
  message(`${JSON.stringify(danger, null, 2)}`)
  // Just a test to see if the utils object is available and understand how
  // the stringify representation works
  message(`${danger.utils.sentence(['Code', 'test', '☕️'])}`)
};

// Not exactly sure why, but in order for the multiple files + import setup to
// work we need to split the export of this function and its declaration as the
// default export. I'm guessing it has to do with how TypeScript resolves
// these?
export default dumpContext
