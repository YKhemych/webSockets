import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
// import { Message } from '../messages/message.entity';
// import { Conversation } from '../conversations/conversation.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500})
  username: string;

  @Column()
  password: string;

  // @OneToMany(type => Message, message => message.user)
  // messages: Message[];
  //
  // @ManyToMany(type => Conversation, conversation => conversation.users)
  // conversations: Conversation[];
}
