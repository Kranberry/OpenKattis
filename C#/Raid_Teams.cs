using System;
using System.Collections.Generic;
using System.Linq;

    // Passes first two tests. No others.
    // Can't seem to figure out why
    // To be continued

    class Program
    {
        static void Main(string[] args)
        {
            int amountOfPlayers = Int32.Parse(Console.ReadLine());
            List<Player> players = new List<Player>();
            // List<string[]> raidTeams = new List<string[]>();

            for (int i = 0; i < amountOfPlayers; i++)
            {
                string[] newPlayer = Console.ReadLine().Split(" ");
                Player player = new Player(newPlayer[0], ulong.Parse(newPlayer[1]), ulong.Parse(newPlayer[2]), ulong.Parse(newPlayer[3]));
                players.Add(player);
                //Console.WriteLine(1);
            }

            while (true)
            {
                if (players.Count < 3)
                    break;
                //Console.WriteLine(players.Count);
                //Console.WriteLine(2);
                string[] raidTeam = new string[3];
                Player bestPlayer = players[0];
                int skill = 1;
                int thisIndex = 0;
                for (int j = 1; j < players.Count; j++)
                {
                    if (players.Count < 3 && raidTeam[0] == null)
                        break;

                    if (raidTeam[2] != null)
                        break;

                    if (j == thisIndex)
                    {
                        j++;
                        if (j == players.Count)
                        {
                            raidTeam[2] = players[0].Name;
                            break;
                        }
                    }

                    switch (skill)
                    {
                        case 1:
                            if (bestPlayer.S1 <= players[j].S1)
                            {
                                if (bestPlayer.S1 == players[j].S1)
                                {
                                    if (string.Compare(bestPlayer.Name, players[j].Name) > -1)
                                    {
                                        bestPlayer = players[j];
                                        thisIndex = j;
                                    }
                                }
                                else
                                {
                                    bestPlayer = players[j];
                                    thisIndex = j;
                                }
                            }

                            if (j == players.Count - 1)
                            {
                                players.RemoveAt(thisIndex);
                                raidTeam[0] = bestPlayer.Name;
                                bestPlayer = players[0];
                                j = -1;
                                skill = 2;
                                thisIndex = 0;
                            }
                            break;
                        case 2:
                            if (bestPlayer.S2 <= players[j].S2)
                            {
                                if (bestPlayer.S2 == players[j].S2)
                                {
                                    if (string.Compare(bestPlayer.Name, players[j].Name) > -1)
                                    {
                                        bestPlayer = players[j];
                                        thisIndex = j;
                                    }
                                }
                                else
                                {
                                    bestPlayer = players[j];
                                    thisIndex = j;
                                }
                            }

                            if (j == players.Count - 1)
                            {
                                raidTeam[1] = bestPlayer.Name;
                                //Console.WriteLine("Removing " + bestPlayer.Name);
                                bestPlayer = players[0];
                                players.RemoveAt(thisIndex);
                                j = -1;
                                skill = 3;
                                thisIndex = 0;
                            }
                            break;
                        case 3:
                            if (bestPlayer.S3 <= players[j].S3)
                            {
                                if (bestPlayer.S3 == players[j].S3)
                                {
                                    if (string.Compare(bestPlayer.Name, players[j].Name) > -1)
                                    {
                                        bestPlayer = players[j];
                                        thisIndex = j;
                                    }
                                }
                                else
                                {
                                    bestPlayer = players[j];
                                    thisIndex = j;
                                }
                            }

                            if (j == players.Count - 1)
                            {
                                raidTeam[2] = bestPlayer.Name;
                                //Console.WriteLine("Removing " + bestPlayer.Name);
                                bestPlayer = players[0];
                                players.RemoveAt(thisIndex);
                                skill = 3;
                                thisIndex = 0;
                                Array.Sort(raidTeam);
                            }
                            break;
                    }
                }

                Console.WriteLine(raidTeam[0] + " " + raidTeam[1] + " " + raidTeam[2]);
                // raidTeams.Add(raidTeam);
            }
        }
    }

    class Player
    {
        public string Name { get; private set; }
        public ulong S1 { get; private set; }
        public ulong S2 { get; private set; }
        public ulong S3 { get; private set; }

        public Player(string name, ulong s1, ulong s2, ulong s3)
        {
            Name = name;
            S1 = s1;
            S2 = s2;
            S3 = s3;
        }
    }

