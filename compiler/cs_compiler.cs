// cs_compiler.cs

using System;
using System.Diagnostics;
using System.IO;

namespace TuaosCompiler
{
    class CsCompiler
    {
        static void Main(string[] args)
        {
            if (args.Length < 1)
            {
                Console.WriteLine("Error: No input file specified.");
                return;
            }

            string inputFile = args[0];
            string outputFile = Path.GetFileNameWithoutExtension(inputFile) + ".exe";

            Process process = new Process();
            process.StartInfo.FileName = "csc.exe";
            process.StartInfo.Arguments = "/out:" + outputFile + " " + inputFile;
            process.StartInfo.UseShellExecute = false;
            process.StartInfo.RedirectStandardOutput = true;
            process.Start();

            string output = process.StandardOutput.ReadToEnd();
            process.WaitForExit();

            if (process.ExitCode == 0)
            {
                Console.WriteLine("Compilation successful.");
            }
            else
            {
                Console.WriteLine("Compilation failed:");
                Console.WriteLine(output);
            }
        }
    }
}
