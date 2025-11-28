declare module "@mailchimp/mailchimp_marketing" {
  interface Config {
    apiKey?: string;
    accessToken?: string;
    server?: string;
  }

  interface MergeFields {
    [key: string]: string;
  }

  interface SetListMemberBody {
    email_address: string;
    status_if_new?: "subscribed" | "unsubscribed" | "cleaned" | "pending";
    status?: "subscribed" | "unsubscribed" | "cleaned" | "pending";
    merge_fields?: MergeFields;
    interests?: { [key: string]: boolean };
    language?: string;
    vip?: boolean;
    location?: {
      latitude?: number;
      longitude?: number;
    };
    marketing_permissions?: Array<{
      marketing_permission_id: string;
      enabled: boolean;
    }>;
    ip_signup?: string;
    timestamp_signup?: string;
    ip_opt?: string;
    timestamp_opt?: string;
    tags?: string[];
  }

  interface Lists {
    setListMember(
      listId: string,
      subscriberHash: string,
      body: SetListMemberBody
    ): Promise<any>;
    addListMember(listId: string, body: any): Promise<any>;
    getListMember(
      listId: string,
      subscriberHash: string,
      opts?: any
    ): Promise<any>;
    updateListMember(
      listId: string,
      subscriberHash: string,
      body: any
    ): Promise<any>;
    deleteListMember(listId: string, subscriberHash: string): Promise<void>;
  }

  interface Mailchimp {
    setConfig(config: Config): void;
    lists: Lists;
  }

  const mailchimp: Mailchimp;
  export default mailchimp;
}
