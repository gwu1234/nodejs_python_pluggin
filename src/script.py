import sys, getopt, time, json
def main(argv):
   argument = ''
   try:
      opts, args = getopt.getopt(argv,"hr:",["result="])
   except getopt.GetoptError:
      sys.exit(2)
   for opt, arg in opts:
      if opt == '-h':
         sys.exit()
      elif opt in ("-r", "--result"):
         argument = arg
   out = []
   sql = 'sql : %s' % argument
   out.append(sql)
   out.append("id: 10001, name: guoping wu, dept: engineering")
   out.append("id: 10002, name: john smith, dept: finance")
   out.append("id: 10003, name: allen dubois, dept: sales")
   out.append("id: 10004, name: philippe chantel, dept: operation")
   print(json.dumps(out))
if __name__ == "__main__":
   main(sys.argv[1:])  