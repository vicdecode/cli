import { Rule, RuleResult } from '../rules-provider'

export type ResourceData = {
  data: { [k: string]: any }
  resource: { id: string; [k: string]: any }
  resourcePath: string
}
export interface RuleEvaluator<K extends Rule> {
  canEvaluate: (rule: K) => boolean
  evaluateSingleResource: (rule: K, data: ResourceData) => Promise<RuleResult>
  // @TODO complex rules can take a query and return an array of resourceId + Result
}