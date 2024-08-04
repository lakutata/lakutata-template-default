import {Controller} from 'lakutata/com/entrypoint'
import {CLIAction, HTTPAction, ServiceAction} from 'lakutata/decorator/ctrl'
import type {ActionPattern} from 'lakutata'
import {TestOptions} from '../options/TestOptions'

export class ExampleController extends Controller {

    /**
     * Example test action
     */
    @CLIAction('test', TestOptions.description('This is a test action'))
    @HTTPAction('/test', 'get', TestOptions)
    @ServiceAction({ctrl: 'example', act: 'test'}, TestOptions)
    public async test(inp: ActionPattern<TestOptions>): Promise<number> {
        return inp.timestamp
    }
}
