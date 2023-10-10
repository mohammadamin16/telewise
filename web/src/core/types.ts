interface ApiUser {
  userId: string;
  name: string;
}

interface ApiBalance {
  userId: string;
  amount: number;
}

interface ApiTransction {
  transactionId?: string;
  chat: string;
  userId: string;
  amount: number;
  group: ApiBalance[];
  title: string;
  description: string;
}
